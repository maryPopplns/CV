import './education.css';

export default function Education(props) {
  return (
    <form className='add_education_form'>
      <label className='add_education_label'>
        Institution :
        <input
          id={props.index}
          className='add_education_input'
          name='institution'
          type='text'
          value={props.data.institution}
          onChange={props.onChange}
        ></input>
      </label>
      <label className='add_education_label'>
        Degree :
        <input
          id={props.index}
          className='add_education_input'
          name='degree'
          type='text'
          value={props.data.degree}
          onChange={props.onChange}
        ></input>
      </label>
      <label className='add_education_label'>
        Start :
        <input
          id={props.index}
          className='add_education_input'
          name='start'
          type='text'
          value={props.data.start}
          onChange={props.onChange}
        ></input>
      </label>
      <label className='add_education_label'>
        End :
        <input
          id={props.index}
          className='add_education_input'
          name='end'
          type='text'
          value={props.data.end}
          onChange={props.onChange}
        ></input>
      </label>
      <i
        id={props.index}
        onClick={props.onClick}
        className='fas fa-trash-alt'
      ></i>
    </form>
  );
}
