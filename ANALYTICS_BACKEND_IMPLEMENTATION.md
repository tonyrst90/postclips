# Analytics Overview API Backend Implementation

## Endpoint: GET /analytics/overview

### Purpose
This endpoint provides aggregate analytics data across all campaigns for a specified date range, including top viewed clips.

### Request Format

**URL:** `/analytics/overview`  
**Method:** `GET`  
**Authentication:** Bearer token required in Authorization header

#### Query Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| startDate | string | Yes | ISO 8601 date string (e.g., "2024-01-01T00:00:00.000Z") |
| endDate | string | Yes | ISO 8601 date string (e.g., "2024-01-31T23:59:59.999Z") |

### Response Format

```json
{
  "success": true,
  "data": {
    "total_views": 2400000,
    "total_clips_posted": 50,
    "average_views_per_clip": 48000,
    "total_likes": 342000,
    "total_comments": 213000,
    "total_shares": 402000,
    "total_budget_spent": 91500,
    "total_budget_allocated": 120000,
    "remaining_views": 74800000,
    "total_views_allocated": 100000000,
    "total_link_clicks": 25800,
    "views_growth_percentage": 22,
    "clips_growth_percentage": 15,
    "likes_growth_percentage": 10,
    "comments_growth_percentage": 22,
    "shares_growth_percentage": 22,
    "link_clicks_growth_percentage": 10,
    "top_clips": [
      {
        "id": "clip_id",
        "campaign_id": "campaign_id",
        "campaign_title": "Campaign Title",
        "clip_url": "https://example.com/clip.mp4",
        "thumbnail_url": "https://example.com/thumbnail.jpg",
        "views": 1200000,
        "likes": 45000,
        "comments": 12000,
        "shares": 8500,
        "created_at": "2024-12-01T10:00:00Z",
        "user_profile": {
          "name": "username",
          "profile_picture": "https://example.com/profile.jpg"
        }
      }
    ]
  }
}
```

### Error Responses

#### 400 Bad Request
```json
{
  "success": false,
  "error": "startDate and endDate parameters are required"
}
```

#### 401 Unauthorized
```json
{
  "success": false,
  "error": "Unauthorized"
}
```

#### 500 Internal Server Error
```json
{
  "success": false,
  "error": "Internal server error"
}
```

## Backend Implementation Requirements

### 1. Authentication & Authorization
- Validate Bearer token in Authorization header
- Ensure user has access to analytics data
- Filter data based on user's brand/organization

### 2. Database Queries

#### Main Analytics Aggregation
```sql
-- Example queries for the main analytics data
SELECT 
  SUM(views) as total_views,
  COUNT(DISTINCT clips.id) as total_clips_posted,
  AVG(views) as average_views_per_clip,
  SUM(likes) as total_likes,
  SUM(comments) as total_comments,
  SUM(shares) as total_shares,
  SUM(link_clicks) as total_link_clicks
FROM clips 
JOIN campaigns ON clips.campaign_id = campaigns.id
JOIN social_posts ON clips.id = social_posts.clip_id
WHERE campaigns.brand_id = ? 
  AND clips.created_at BETWEEN ? AND ?
  AND clips.status = 'approved';
```

#### Budget Information
```sql
SELECT 
  SUM(spent_amount) as total_budget_spent,
  SUM(allocated_amount) as total_budget_allocated
FROM campaign_budgets 
JOIN campaigns ON campaign_budgets.campaign_id = campaigns.id
WHERE campaigns.brand_id = ?
  AND campaigns.created_at BETWEEN ? AND ?;
```

#### Views Allocation
```sql
SELECT 
  SUM(target_views) as total_views_allocated,
  (SUM(target_views) - SUM(actual_views)) as remaining_views
FROM campaigns 
WHERE brand_id = ?
  AND created_at BETWEEN ? AND ?;
```

#### Growth Percentages
Calculate growth by comparing current period with previous period of same duration.

#### Top Clips
```sql
SELECT 
  clips.id,
  clips.campaign_id,
  campaigns.title as campaign_title,
  clips.clip_url,
  clips.thumbnail_url,
  SUM(social_posts.views) as views,
  SUM(social_posts.likes) as likes,
  SUM(social_posts.comments) as comments,
  SUM(social_posts.shares) as shares,
  clips.created_at,
  users.name as user_name,
  users.profile_picture
FROM clips
JOIN campaigns ON clips.campaign_id = campaigns.id
JOIN social_posts ON clips.id = social_posts.clip_id
JOIN users ON clips.user_id = users.id
WHERE campaigns.brand_id = ?
  AND clips.created_at BETWEEN ? AND ?
  AND clips.status = 'approved'
GROUP BY clips.id
ORDER BY views DESC
LIMIT 10;
```

### 3. Service Layer Implementation

```typescript
// Example service layer structure
class AnalyticsService {
  async getOverviewData(brandId: string, startDate: string, endDate: string) {
    // Validate date range
    // Execute database queries
    // Calculate growth percentages
    // Format response data
    // Return structured analytics data
  }

  private async calculateGrowthPercentages(
    currentData: any, 
    brandId: string, 
    startDate: string, 
    endDate: string
  ) {
    // Calculate previous period dates
    // Query previous period data
    // Calculate percentage changes
    // Return growth metrics
  }
}
```

### 4. Controller Layer Implementation

```typescript
// Example controller structure
class AnalyticsController {
  async getOverview(req: Request, res: Response) {
    try {
      // Extract and validate query parameters
      // Extract user/brand info from JWT token
      // Call analytics service
      // Return formatted response
    } catch (error) {
      // Handle errors and return appropriate status codes
    }
  }
}
```

### 5. Route Configuration

```typescript
// Example route setup
router.get('/analytics/overview', 
  authenticateToken,
  validateQueryParams(['startDate', 'endDate']),
  analyticsController.getOverview
);
```

### 6. Validation Middleware

```typescript
// Validate query parameters
const validateQueryParams = (requiredParams: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    for (const param of requiredParams) {
      if (!req.query[param]) {
        return res.status(400).json({
          success: false,
          error: `${param} parameter is required`
        });
      }
    }
    
    // Validate date format
    try {
      new Date(req.query.startDate as string).toISOString();
      new Date(req.query.endDate as string).toISOString();
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: 'Invalid date format. Please use ISO 8601 format'
      });
    }
    
    next();
  };
};
```

## Testing Requirements

### Unit Tests
- Test service layer methods
- Test data aggregation logic
- Test growth calculation algorithms
- Test error handling

### Integration Tests
- Test full endpoint with real database
- Test authentication and authorization
- Test with various date ranges
- Test with edge cases (no data, invalid dates)

### Performance Tests
- Test with large datasets
- Ensure query performance with proper indexing
- Test concurrent requests

## Database Indexes Required

```sql
-- Indexes for optimal query performance
CREATE INDEX idx_clips_brand_date_status ON clips(brand_id, created_at, status);
CREATE INDEX idx_campaigns_brand_date ON campaigns(brand_id, created_at);
CREATE INDEX idx_social_posts_clip_id ON social_posts(clip_id);
CREATE INDEX idx_campaign_budgets_campaign_id ON campaign_budgets(campaign_id);
```

## Error Handling

- Implement comprehensive error logging
- Return user-friendly error messages
- Handle database connection errors
- Handle invalid date ranges gracefully
- Implement rate limiting to prevent abuse

## Security Considerations

- Validate all input parameters
- Ensure users can only access their own brand's data
- Implement proper SQL injection prevention
- Add request rate limiting
- Log all analytics access for audit purposes
