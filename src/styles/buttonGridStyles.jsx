const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f2f5',
    padding: '20px'
    
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '30px',
    textAlign: 'center'
  },
  buttonGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    marginBottom: '40px',
    maxWidth: '400px'
  },
  button: {
    width: '120px',
    height: '120px',
    border: '3px solid #ddd',
    borderRadius: '15px',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  buttonHover: {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 15px rgba(0,0,0,0.2)'
  },
  buttonDisabled: {
    cursor: 'not-allowed',
    opacity: '0.7',
    transform: 'none'
  },
  resetButton: {
    padding: '12px 30px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    boxShadow: '0 4px 8px rgba(0,123,255,0.3)'
  },
  resetButtonHover: {
    backgroundColor: '#0056b3'
  },
  colorInfo: {
    marginTop: '20px',
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    maxWidth: '500px',
    textAlign: 'center'
  },
  currentColor: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '10px'
  },
  colorList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    justifyContent: 'center'
  },
  colorSwatch: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    border: '2px solid #ddd'
  }
};

export default styles;
