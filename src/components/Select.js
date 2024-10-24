import React from 'react';
import { useTheme } from '../ThemeProvider'; // Import your custom theme hook

const Select = ({ options = [], onChange, value, label }) => {
  const theme = useTheme(); // Get theme values

  return (
    <div className="select-wrapper">
      {label && <label htmlFor="select">{label}</label>}
      <select
        id="select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          padding: '10px',
          borderRadius: '5px',
          border: `1px solid ${theme.colors.primary}`,
          fontSize: theme.fontSizes.body,
          fontFamily: theme.fonts.body,
          backgroundColor: '#fff',
          color: theme.colors.text,
        }}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <style jsx>{`
        .select-wrapper {
          margin-bottom: 1rem;
        }
        label {
          margin-right: 10px;
          font-size: ${theme.fontSizes.body};
          font-family: ${theme.fonts.body};
        }
      `}</style>
    </div>
  );
};

export default Select;