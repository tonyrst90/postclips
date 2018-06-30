#!/bin/bash

# CONFIGURATION

# Setup
# File pool
files=("README.md" "notes.txt" "script.js" "config.py")

start_date="2023-05-24"
end_date="2023-12-24"
current_date=$start_date

while [[ "$current_date" < "$end_date" ]]; do
  day_of_week=$(date -d "$current_date" +%u)  # 1 = Monday, 7 = Sunday
  year=$(date -d "$current_date" +%Y)

  # Skip weekends
  if [[ "$day_of_week" -gt 5 ]]; then
    current_date=$(date -I -d "$current_date + 1 day")
    continue
  fi

  # Set different commit chances by year
  if [[ "$year" -lt 2021 ]]; then
    commit_chance=20  # ~1 commit per week
  else
    commit_chance=40  # ~2–3 per week
  fi

  rand=$((RANDOM % 100))
  if [[ $rand -lt $commit_chance ]]; then
    filename=${files[$RANDOM % ${#files[@]}]}
    echo "// Change on $current_date" >> $filename

    # Random time
    hour=$((RANDOM % 8 + 9))
    min=$((RANDOM % 60))

    export GIT_AUTHOR_DATE="$current_date $hour:$min:00"
    export GIT_COMMITTER_DATE="$current_date $hour:$min:00"

    git add $filename

    GIT_AUTHOR_DATE="2018-06-30T12:00:00" \
    GIT_COMMITTER_DATE="2018-06-30T12:00:00" \
    git commit -m "Edit $filename on $current_date"
  fi

  current_date=$(date -I -d "$current_date + 1 day")
done