"use client";

import React, { useRef, useState } from "react";
import { useFeedback } from "@/Hooks/useFeedback";
import { UploadCloud } from "react-feather";
import {
    Container,
    Row,
    Col,
    Button,
    Input,
    Label
} from "reactstrap";

const FeedbackForm: React.FC = () => {
    const { submitFeedback, loading, error, success } = useFeedback();
    const [description, setDescription] = useState("");
    const [screenshot, setScreenshot] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | undefined>(undefined);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [showForm, setShowForm] = useState(true);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setScreenshot(file || null);
        if (file) {
            setPreviewUrl(URL.createObjectURL(file));
        } else {
            setPreviewUrl(undefined);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await submitFeedback({ description, screenshot });
        if (result) {
            setDescription("");
            setScreenshot(null);
            setPreviewUrl(undefined);
            if (fileInputRef.current) fileInputRef.current.value = "";
            setShowForm(false);
        }
    };

    const handleSendMore = () => {
        setShowForm(true);
        setDescription("");
        setScreenshot(null);
        setPreviewUrl(undefined);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    return (
        <Container fluid className="pt-5">
            <Row className="justify-content-left">
                <Col md={8} lg={8} xl={8}>
                    <h1 className="text-white mb-4" style={{ fontSize: 32, fontWeight: 700 }}>Add feedback</h1>
                    <p style={{ color: "#aaa", marginBottom: 32 }}>
                        Upload a screenshot or add a description to report a bug, request a feature, or suggest a change
                    </p>
                    {showForm ? (
                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: 32 }}>
                                <Label for="screenshot" className="post-label d-flex align-items-center gap-2">
                                    Screenshot <span style={{ color: "#888", fontWeight: 400 }}>(optional)</span>
                                </Label>
                                <div
                                    style={{
                                        border: "2px dashed #222",
                                        background: "#111",
                                        borderRadius: 12,
                                        minHeight: 120,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                        cursor: "pointer",
                                        marginBottom: 8,
                                    }}
                                    onClick={() => fileInputRef.current?.click()}
                                >
                                    {previewUrl ? (
                                        <img src={previewUrl} alt="Screenshot preview" style={{ maxHeight: 120, maxWidth: "100%", borderRadius: 8 }} />
                                    ) : (
                                        <>
                                            <UploadCloud size={32} color="#888" />
                                            <div style={{ color: "#888", marginTop: 8 }}>Upload file</div>
                                        </>
                                    )}
                                    <input
                                        ref={fileInputRef}
                                        id="screenshot"
                                        type="file"
                                        accept="image/*"
                                        style={{ display: "none" }}
                                        onChange={handleFileChange}
                                    />
                                </div>
                            </div>
                            <div style={{ marginBottom: 32 }}>
                                <Label for="description" className="post-label">
                                    Description <span style={{ color: "#888", fontWeight: 400 }}>(optional)</span>
                                </Label>
                                <Input
                                    id="description"
                                    type="textarea"
                                    className="input-text-area-dark"
                                    placeholder="Describe your feedback..."
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                    style={{ resize: "vertical", minHeight: 120 }}
                                />
                            </div>
                            {error && <div style={{ color: "#ff4444", marginBottom: 16 }}>{error}</div>}
                            <Button
                                className="btn-chipped"
                                type="submit"
                                disabled={loading || !description}
                                style={{ opacity: !description ? 0.5 : 1, width: "100%" }}
                            >
                                {loading ? "Sending..." : "SEND FEEDBACK"}
                            </Button>
                        </form>
                    ) : (
                        <>
                            <div style={{ color: "#00e7ff", marginBottom: 16 }}>
                                Thank you for your feedback! We will get back to you as soon as possible.
                            </div>
                            <Button
                                className="btn-chipped btn-chipped-white"
                                style={{ width: "100%" }}
                                onClick={handleSendMore}
                            >
                                SEND MORE FEEDBACK
                            </Button>
                        </>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default FeedbackForm; 