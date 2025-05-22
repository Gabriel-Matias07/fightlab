import './Pesquisa.css';

function Pesquisa({ onClose }) {
  return (
    <div className="modal">

         <header className='header'>
              <h2>Digite o nome do atleta</h2>
              <hr className='hr' />
          </header>

      <section className='inputs'>
            <input type="text" placeholder="PROCURAR" />
            <br />
            <button onClick={onClose}>Fechar</button>
      </section>
    </div>
  );
}

const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fff',
  padding: '20px',
  boxShadow: '0 0 10px rgba(0,0,0,0.3)',
  zIndex: 1000
};

export default Pesquisa;
