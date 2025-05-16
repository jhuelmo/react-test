import { useState } from "react";
import reactLogo from "@/assets/logo.png";

export function InfoBar() {
    return (
        <div className="info-bar-wrapper">
            <div className="info-bar">
                <div className="right-container">
                    <a className="logo">
                        <img src={reactLogo} />
                    </a>
                </div>
            </div>
        </div>
    );
}
