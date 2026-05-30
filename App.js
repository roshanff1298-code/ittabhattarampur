import React, { useState } from 'react';

const players = [
  {
    initials: 'NA',
    real: 'Naksh / Adi',
    nick: 'Alien Hazlewood',
    role: 'Bowling All-rounder',
    color: '#1565c0',
    lightColor: '#e3f2fd',
    darkColor: '#0C447C',
  },
  {
    initials: 'RI',
    real: 'Rounak / Ishan',
    nick: 'Kulfi Abhishek Sharma',
    role: 'Batting All-rounder',
    color: '#2e7d32',
    lightColor: '#e8f5e9',
    darkColor: '#27500A',
  },
  {
    initials: 'RH',
    real: 'Rahul',
    nick: 'Mastafizur Bengali',
    role: 'Fast Pacer',
    color: '#e65100',
    lightColor: '#fff3e0',
    darkColor: '#633806',
  },
  {
    initials: 'VG',
    real: 'Vaishno',
    nick: 'Ganja Russel',
    role: 'Wide Fhekne Wala Bowler',
    color: '#6a1b9a',
    lightColor: '#f3e5f5',
    darkColor: '#3C3489',
  },
];

const styles = {
  body: {
    margin: 0,
    fontFamily: "'Nunito', sans-serif",
    background: '#f0f4ff',
    minHeight: '100vh',
  },
  header: {
    background: '#1a237e',
    padding: '1.5rem',
    textAlign: 'center',
  },
  headerTitle: {
    fontFamily: "'Baloo 2', cursive",
    fontSize: '2rem',
    fontWeight: 800,
    color: '#fff',
    margin: 0,
  },
  headerSub: {
    fontSize: '0.85rem',
    color: 'rgba(255,255,255,0.7)',
    marginTop: '4px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontWeight: 600,
  },
  banner: {
    background: '#f9a825',
    padding: '10px',
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: 700,
    color: '#4a2c00',
    letterSpacing: '0.5px',
  },
  main: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '2rem 1rem',
  },
  sectionTitle: {
    fontFamily: "'Baloo 2', cursive",
    fontSize: '1.5rem',
    fontWeight: 700,
    textAlign: 'center',
    color: '#1a237e',
    marginBottom: '1.5rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '1.25rem',
    marginBottom: '2rem',
  },
  card: {
    background: '#fff',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
    cursor: 'pointer',
    transition: 'transform 0.15s, box-shadow 0.15s',
    border: '1.5px solid #e8eaf6',
  },
  cardTop: {
    padding: '1.5rem 1rem 1rem',
    textAlign: 'center',
  },
  avatar: {
    width: '68px',
    height: '68px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Baloo 2', cursive",
    fontSize: '22px',
    fontWeight: 800,
    margin: '0 auto 12px',
    color: '#fff',
  },
  realName: {
    fontFamily: "'Baloo 2', cursive",
    fontSize: '1rem',
    fontWeight: 700,
    color: '#1a1a2e',
    marginBottom: '3px',
  },
  aka: {
    fontSize: '11px',
    color: '#888',
    fontWeight: 600,
    letterSpacing: '0.5px',
    marginBottom: '8px',
  },
  nickBadge: {
    display: 'inline-block',
    padding: '4px 14px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: 700,
    marginBottom: '4px',
  },
  cardBottom: {
    borderTop: '1px solid #f0f0f0',
    padding: '10px 1rem',
    background: '#f8f9ff',
    textAlign: 'center',
  },
  roleLabel: {
    fontSize: '10px',
    color: '#888',
    fontWeight: 700,
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginBottom: '3px',
  },
  roleVal: {
    fontSize: '13px',
    fontWeight: 700,
    color: '#1a237e',
  },
  detailPanel: {
    background: '#fff',
    borderRadius: '16px',
    border: '2px solid #e8eaf6',
    padding: '1.5rem',
    marginBottom: '1.5rem',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
  },
  detailHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '1.25rem',
  },
  detailAv: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Baloo 2', cursive",
    fontSize: '20px',
    fontWeight: 800,
    color: '#fff',
    flexShrink: 0,
  },
  detailReal: {
    fontFamily: "'Baloo 2', cursive",
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#1a1a2e',
  },
  detailNick: {
    fontSize: '13px',
    color: '#555',
    fontWeight: 600,
  },
  detailRows: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
  },
  detailRow: {
    background: '#f8f9ff',
    borderRadius: '10px',
    border: '1px solid #e8eaf6',
    padding: '12px',
  },
  drLabel: {
    fontSize: '10px',
    color: '#888',
    fontWeight: 700,
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginBottom: '4px',
  },
  drVal: {
    fontSize: '14px',
    fontWeight: 700,
    color: '#1a237e',
  },
  closeBtn: {
    marginTop: '14px',
    padding: '8px 20px',
    background: '#fff',
    border: '1.5px solid #ddd',
    borderRadius: '10px',
    fontSize: '13px',
    fontWeight: 700,
    color: '#555',
    cursor: 'pointer',
  },
  footer: {
    textAlign: 'center',
    padding: '1.5rem',
    borderTop: '1px solid #e0e0e0',
    marginTop: '1rem',
  },
  footerText: {
    fontFamily: "'Baloo 2', cursive",
    fontSize: '1rem',
    fontWeight: 700,
    color: '#1a237e',
  },
  footerSub: {
    fontSize: '12px',
    color: '#888',
    marginTop: '4px',
  },
  colonyTag: {
    display: 'inline-block',
    background: '#e3f2fd',
    color: '#0C447C',
    fontSize: '11px',
    fontWeight: 700,
    padding: '4px 12px',
    borderRadius: '20px',
    marginTop: '6px',
    letterSpacing: '0.5px',
  },
};

export default function App() {
  const [selected, setSelected] = useState(null);

  const handleCard = (i) => {
    setSelected(selected === i ? null : i);
  };

  return (
    <div style={styles.body}>
      <div style={styles.header}>
        <div style={styles.headerTitle}>Ittabhattarampur</div>
        <div style={styles.headerSub}>Colony Cricket Stars</div>
      </div>
      <div style={styles.banner}>
        🏏 Meet the legends of our colony 🏏
      </div>

      <div style={styles.main}>
        <div style={styles.sectionTitle}>Our Colony Stars</div>

        {selected !== null && (
          <div style={styles.detailPanel}>
            <div style={styles.detailHeader}>
              <div style={{ ...styles.detailAv, background: players[selected].color }}>
                {players[selected].initials}
              </div>
              <div>
                <div style={styles.detailReal}>{players[selected].real}</div>
                <div style={styles.detailNick}>"{players[selected].nick}"</div>
              </div>
            </div>
            <div style={styles.detailRows}>
              <div style={styles.detailRow}>
                <div style={styles.drLabel}>Nickname</div>
                <div style={styles.drVal}>{players[selected].nick}</div>
              </div>
              <div style={styles.detailRow}>
                <div style={styles.drLabel}>Cricket Role</div>
                <div style={styles.drVal}>{players[selected].role}</div>
              </div>
              <div style={styles.detailRow}>
                <div style={styles.drLabel}>Real Name</div>
                <div style={styles.drVal}>{players[selected].real}</div>
              </div>
              <div style={styles.detailRow}>
                <div style={styles.drLabel}>Colony</div>
                <div style={styles.drVal}>Ittabhattarampur</div>
              </div>
            </div>
            <button style={styles.closeBtn} onClick={() => setSelected(null)}>
              Close profile
            </button>
          </div>
        )}

        <div style={styles.grid}>
          {players.map((p, i) => (
            <div
              key={i}
              style={{
                ...styles.card,
                transform: selected === i ? 'translateY(-4px)' : 'none',
                boxShadow: selected === i
                  ? `0 6px 20px ${p.color}33`
                  : '0 2px 12px rgba(0,0,0,0.08)',
                border: selected === i ? `2px solid ${p.color}` : '1.5px solid #e8eaf6',
              }}
              onClick={() => handleCard(i)}
            >
              <div style={styles.cardTop}>
                <div style={{ ...styles.avatar, background: p.color }}>
                  {p.initials}
                </div>
                <div style={styles.realName}>{p.real}</div>
                <div style={styles.aka}>also known as</div>
                <div style={{ ...styles.nickBadge, background: p.lightColor, color: p.darkColor }}>
                  {p.nick}
                </div>
              </div>
              <div style={styles.cardBottom}>
                <div style={styles.roleLabel}>Cricket Role</div>
                <div style={styles.roleVal}>{p.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.footer}>
          <div style={styles.footerText}>ittabhattarampur.com</div>
          <div style={styles.footerSub}>Representing our colony with pride</div>
          <div style={styles.colonyTag}>Colony Pride</div>
        </div>
      </div>
    </div>
  );
}
