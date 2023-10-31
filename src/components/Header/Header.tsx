import { ChangeEvent, Component, FormEvent } from 'react';

interface HeaderProps {
  onChange: (val: string) => void;
}

interface HeaderState {
  search: string;
}

class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = { search: '' };
  }

  onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    this.setState({ search: value });
  };

  onSubmitSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('search-value', this.state.search);
    this.props.onChange(this.state.search);
  };

  componentDidMount() {
    const search = localStorage.getItem('search-value');
    if (search) {
      this.setState({ search });
    }
  }

  render() {
    return (
      <form className="header" onSubmit={this.onSubmitSearch}>
        <input
          className="header__search"
          type="search"
          placeholder="Search"
          value={this.state.search}
          onChange={this.onSearchChange}
        />
        <button className="header__search">Search</button>
      </form>
    );
  }
}

export default Header;
