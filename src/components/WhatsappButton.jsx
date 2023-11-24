export const WhatsappButton = () => {
  const phoneNumber = '+541128808745';
  
  const message = encodeURIComponent('Hola, ¿Podrias proporcionarme más información sobre los viajes disponibles?');

  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

  return (
    <div>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <button id='fixedButton'>
          <img className="w-1/2" src="/src/img/Whatsapp.svg" alt="WhatsApp" />
        </button>
      </a>
    </div>
  );
};