import Enzyme, {shallow, render, mount} from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';

Enzyme.configure({ adaptor: new Adaptor() });

global.shallow = shallow;
global.render = render;
global.mount = mount;

global.rootDirectory = __dirname;