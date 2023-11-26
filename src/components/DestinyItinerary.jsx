import PropTypes from 'prop-types';

const DestinyItinerary = ({ collapsablesItirenario, collapsableItinerarioList, handleCollapsableItinerario }) => {
  return (
    <div className="colapsables-container p-8 md:p-0 mt-6 md:mb-6 md:mt-0">
      <div className="colapsable-item">
        {collapsablesItirenario.map((c, index) => (
          <div onClick={() => handleCollapsableItinerario(index)} className="mt-10" key={c.dia}>
            <div className="colapsable-header flex items-center justify-between">
              <h2 className="p-6 capitalize">Dia {index + 1}</h2>
              <span className="p-6 collapsable-arrow">
                {collapsableItinerarioList[index] ? (
                  <img src="/src/img/arrow_forward_ios_up.svg" alt="flecha abierta" />
                ) : (
                  <img src="/src/img/arrow_forward_ios_down.svg" alt="flecha cerrado" />
                )}
              </span>
            </div>
            {collapsableItinerarioList[index] ? (
              <div className="colapsable-content">
                <p className="text-2xl p-5 text-justify	">{c}</p>
              </div>
            ) : (
              <div className="closed-content">
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

DestinyItinerary.propTypes = {
  collapsablesItirenario: PropTypes.arrayOf(
    PropTypes.shape({
      dia: PropTypes.number.isRequired,
      descripcion: PropTypes.string.isRequired,
    })
  ).isRequired,
  collapsableItinerarioList: PropTypes.object.isRequired,
  handleCollapsableItinerario: PropTypes.func.isRequired,
};

export default DestinyItinerary;