import { Component } from 'react';
import './App.css';
import { Person } from './types';
import Header from './components/Header/Header';
import { API_HOST } from './constants';
import PersonItem from './components/PersonItem/PersonItem';

interface AppProps {}

interface AppState {
  isLoading: boolean;
  isError: boolean;
  list: Person[];
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      isLoading: false,
      isError: false,
      list: [],
    };
  }
  fetchPersons = async (val?: string) => {
    this.setState({ isLoading: true });
    const value = val?.trim();
    let url = API_HOST;
    url += value ? `?search=${value}` : '';
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      if (data.results) {
        console.log(data.results);
        this.setState({ isLoading: false, list: data.results });
      }
    } catch (e) {
      console.log(e);
      this.setState({ isLoading: true, list: [], isError: true });
    }
  };
  setError = () => {
    this.setState({ isError: true });
  };
  onSearchChange = (val: string) => {
    this.fetchPersons(val);
  };
  componentDidMount(): void {
    this.fetchPersons();
  }

  render() {
    if (this.state.isError) {
      throw new Error();
    }
    return (
      <div className="app">
        <div className="container">
          <div className="app__inner">
            <Header onChange={this.onSearchChange} />
            <main>
              <div className="app__btn-wrapper">
                <button onClick={this.setError}>Make UI Error</button>
              </div>
              {this.state.isLoading && (
                <div className="app__loading">Loading...</div>
              )}
              {!this.state.isLoading && this.state.list.length > 0 && (
                <ul className="app__list">
                  {this.state.list.map((item: Person) => {
                    return (
                      <li key={item.name}>
                        <PersonItem item={item} />
                      </li>
                    );
                  })}
                </ul>
              )}
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
