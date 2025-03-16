import Checkbox from './Checkbox';

function Header({ checked, onChange }) {
  const title = 'Memory card';

  return (
    <header className="page-header">
      <div className="container">
        <h1 className="page-header__heading">{title}</h1>

        <Checkbox
          label={'use local images'}
          checked={checked}
          onChange={onChange}
        />
      </div>
    </header>
  );
}

export default Header;
