import React from "react";
import { useAppSelector } from "@/Redux/Hooks";

const CampaignStepper: React.FC = () => {
    const { steps, currentStep } = useAppSelector((state) => state.header);

    return (
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {steps.map((_, idx) => (
                <React.Fragment key={idx}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <div
                            style={{
                                width: 24,
                                height: 24,
                                borderRadius: 4,
                                background:
                                    idx + 1 < currentStep
                                        ? "#00E7FF"
                                        : idx + 1 === currentStep
                                        ? "#5B8CFF"
                                        : "#232323",
                                color:
                                    idx + 1 < currentStep
                                        ? "#232323"
                                        : idx + 1 === currentStep
                                        ? "#fff"
                                        : "#888",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontWeight: 600,
                                fontSize: 14,
                                transition: "background 0.2s",
                            }}
                        >
                            {idx + 1 < currentStep ? (
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 7.5L6 10.5L11 4.5" stroke="#232323" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            ) : (
                                idx + 1
                            )}
                        </div>
                    </div>
                    {idx < steps.length - 1 && (
                        <div style={{ width: 48, height: 2, background: "#232323" }} />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default CampaignStepper; 