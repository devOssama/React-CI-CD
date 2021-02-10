import { render } from '@testing-library/react';
import Enzyme, { mount } from 'enzyme';
import App from './App';


// Add your adapter version below
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

test('TEST', () => {
  render(<App />);

});


 

});
