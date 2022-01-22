import React from "react";

export default interface ISectionProps {
  children?: React.ReactNode
  title: string;
  id: string;
  srOnly?: boolean;
  fullWidth?: boolean;
}

export interface ISectionState {}
