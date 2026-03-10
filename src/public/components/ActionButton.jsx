import React from 'react';

const ActionButton = ({ 
  label, 
  icon: Icon, // Pass as a component or element
  onClick, 
  variant = 'primary', // 'primary' (gradient) or 'outline'
  className = "",
  type = "button"
}) => {
  const brandGreen = "#2bb673";
  const brandTeal = "#01a79d";

  // Base styles for consistency across all buttons
  const baseStyles = "flex items-center justify-center gap-2 px-5 md:px-8 py-3 md:py-4 rounded-lg font-bold text-xs md:text-base lg:text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-300 whitespace-nowrap";

  // Variant-specific styles
  const variants = {
    primary: {
      style: { background: `linear-gradient(to right, ${brandGreen}, ${brandTeal})` },
      classes: "text-white border-none"
    },
    outline: {
      style: { borderColor: brandTeal, color: brandTeal },
      classes: "bg-transparent border-2"
    }
  };

  const selectedVariant = variants[variant] || variants.primary;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${selectedVariant.classes} ${className}`}
      style={selectedVariant.style}
    >
      {/* Dynamic Icon Rendering */}
      {Icon && <span className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">{Icon}</span>}
      <span className="leading-none">{label}</span>
    </button>
  );
};

export default ActionButton;