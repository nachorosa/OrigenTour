import { useState } from 'react';
import PropTypes from 'prop-types';

const DestinyIncludes = ({ handleCollapsable, servicios }) => {
  const [openCollapsables, setOpenCollapsables] = useState({});

  const toggleCollapsable = (name) => {
    setOpenCollapsables((prevOpenCollapsables) => ({
      ...prevOpenCollapsables,
      [name]: !prevOpenCollapsables[name],
    }));
    handleCollapsable(name);
  };

  return (
    <div className="colapsables-container p-8 md:p-0 mt-6 md:mb-6 md:mt-0">
      <div className="colapsable-item">
        {servicios.map((c, index) => (
          <div key={index} onClick={() => toggleCollapsable(c.servicio)} className="mt-10">
            <div className="colapsable-header flex items-center justify-between">
              <h2 className="pl-4 pb-6 capitalize">{c.servicio}</h2>
              <span className="mb-6 collapsable-arrow">{openCollapsables[c.servicio] ? <img src="/src/img/arrow_forward_ios_up.svg" alt="flecha abierta" /> : <img src="/src/img/arrow_forward_ios_down.svg" alt="flecha cerrado" />}</span>
            </div>
            {openCollapsables[c.servicio] ? (
              <div className="colapsable-content">
                <ul>
                  {c.subServicios.map((i, index) => (
                    <li key={index}>{i}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

DestinyIncludes.propTypes = {
  handleCollapsable: PropTypes.func.isRequired,
  servicios: PropTypes.arrayOf(
    PropTypes.shape({
      servicio: PropTypes.string.isRequired,
      subServicios: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default DestinyIncludes