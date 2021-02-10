import { render } from '@testing-library/react';
import Enzyme, { mount } from 'enzyme';
import App from './App';


// Add your adapter version below
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

test('displays a quote', () => {
  render(<App />);

});

it('calls generateRandomQuote prop function when next button is clicked', () => {
  const generateRandomQuoteFn = jest.fn();
 

});
