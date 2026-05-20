export default function InputField({ label, value, onChange, min, max, step, prefix, suffix }) {
  return (
    <label style={styles.label}>
      {label}
      <div style={styles.inputRow}>
        {prefix && <span style={styles.adornment}>{prefix}</span>}
        <input
          style={{
            ...styles.input,
            paddingLeft: prefix ? 12 : 12,
            borderLeft: prefix ? '1.5px solid #d1d5db' : 'none',
          }}
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => onChange(Number(e.target.value))}
        />
        {suffix && <span style={{ ...styles.adornment, borderLeft: '1.5px solid #d1d5db', borderRight: 'none' }}>{suffix}</span>}
      </div>
    </label>
  );
}

const styles = {
  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    fontSize: 14,
    fontWeight: 600,
    color: '#374151',
  },
  inputRow: {
    display: 'flex',
    alignItems: 'center',
    border: '1.5px solid #d1d5db',
    borderRadius: 8,
    overflow: 'hidden',
  },
  adornment: {
    padding: '10px 12px',
    background: '#f3f4f6',
    color: '#6b7280',
    fontSize: 14,
    fontWeight: 600,
    borderRight: '1.5px solid #d1d5db',
  },
  input: {
    flex: 1,
    border: 'none',
    outline: 'none',
    padding: '10px 12px',
    fontSize: 15,
    color: '#0f172a',
    width: '100%',
  },
};
