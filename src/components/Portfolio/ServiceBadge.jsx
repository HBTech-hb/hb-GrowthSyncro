// src/components/Portfolio/ServiceBadge.jsx
import React from "react";

const ServiceBadge = React.memo(({ label }) => {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100/80 transition-colors duration-200">
      {label}
    </span>
  );
});

ServiceBadge.displayName = "ServiceBadge";

export default ServiceBadge;