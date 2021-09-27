import './experience.css';

export default function Experience(props) {
  return (
    <form className='add_experience_form'>
      <label className='add_experience_label'>
        Company :
        <input
          id={props.index}
          className='add_experience_input'
          name='company'
          type='text'
          value={props.data.company}
          onChange={props.onChange}
        ></input>
      </label>
      <label className='add_experience_label'>
        Title :
        <input
          id={props.index}
          className='add_experience_input'
          name='title'
          type='text'
          value={props.data.title}
          onChange={props.onChange}
        ></input>
      </label>
      <label className='add_experience_label'>
        Start :
        <input
          id={props.index}
          className='add_experience_input'
          name='start'
          type='text'
          value={props.data.start}
          onChange={props.onChange}
        ></input>
      </label>
      <label className='add_experience_label'>
        End :
        <input
          id={props.index}
          className='add_experience_input'
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
