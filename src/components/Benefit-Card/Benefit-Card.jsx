import './Benefit-Card.scss';

export const BenefitCard = ({ id, title, description }) => {
  return (
    <article className='benefit-card'>
      <p className='benefit-card__number'>0{id}.</p>
      <h3 className='benefit-card__title'>{title}</h3>
      <p className="benefit-card__description">{description}</p>
    </article>
  )
}