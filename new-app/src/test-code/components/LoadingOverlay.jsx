"use client";
import { createPortal } from "react-dom";
import "./ConfirmationOverlay.css";
import Spinner from "./spinner";

export default function LoadingOverlay() {
  if (typeof document !== "undefined") {
    return createPortal(
      <div className="loading-overlay">
        <p className="loading-text">Submitting Test</p>
        <Spinner className="spinner" size="xl" />
      </div>,
      document.body
    );
  }
}
