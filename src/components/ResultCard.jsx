const fmt = (n) =>
  n.toLocaleString('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 });

export default function ResultCard({ label, value, color }) {
  return (
    <div style={styles.card}>
      <span style={styles.label}>{label}</span>
      <span style={{ ...styles.value, color: color || '#0f172a' }}>{fmt(value)}</span>
    </div>
  );
}

const styles = {
  card: {
    background: '#f8fafc',
    borderRadius: 12,
    padding: '20px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    textAlign: 'center',
  },
  label: {
    fontSize: 12,
    fontWeight: 600,
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  value: {
    fontSize: 22,
    fontWeight: 700,
  },
};
