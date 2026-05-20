const FREQUENCIES = [
  { label: 'Annually', value: 1 },
  { label: 'Quarterly', value: 4 },
  { label: 'Monthly', value: 12 },
];

export default function FrequencySelector({ value, onChange }) {
  return (
    <label style={styles.label}>
      Compound Frequency
      <div style={styles.row}>
        {FREQUENCIES.map((f) => (
          <button
            key={f.value}
            style={value === f.value ? styles.active : styles.btn}
            onClick={() => onChange(f.value)}
          >
            {f.label}
          </button>
        ))}
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
    gridColumn: '1 / -1',
  },
  row: {
    display: 'flex',
    gap: 8,
  },
  btn: {
    flex: 1,
    padding: '10px 0',
    border: '1.5px solid #d1d5db',
    borderRadius: 8,
    background: '#fff',
    color: '#374151',
    fontSize: 14,
    fontWeight: 500,
    cursor: 'pointer',
  },
  active: {
    flex: 1,
    padding: '10px 0',
    border: '1.5px solid #2563eb',
    borderRadius: 8,
    background: '#eff6ff',
    color: '#2563eb',
    fontSize: 14,
    fontWeight: 600,
    cursor: 'pointer',
  },
};
