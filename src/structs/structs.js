import Electrican from './../image/Electrican.svg';
import Plumber from './../image/Plumber.svg';
import Gardener from './../image/Gardener.svg';
import Houskeper from './../image/Houskeper.svg';
import Cook from './../image/Cook.svg';

const Structs = {

   typeArr : [
    { name: 'Electrican', src : Electrican },
    { name: 'Plumber',   src : Plumber },
    { name: 'Gardener', src : Gardener },
    { name: 'Houskeper', src : Houskeper },
    { name: 'Cook', src : Cook }],

  adittionType : {
    Electrican : ['Screw in a light bulb', 'Make outlet', 'Do the wiring', 'Make the switch'],
    Plumber : ['Unlock a toilet', 'Unlock a sink', 'Fix a woter leak', 'Install a shower', 'Install a sink', 'Install a toilet'],
    Gardener : ['Сut wood', 'Trim the bushes', 'Mow the grass', 'Plant a tree', 'Plant bushes', 'Plant grass'],
    Houskeper : ['Wash the plate', 'Go shopping', 'Clean the kitchen', 'Clean room', 'Clean corridor'],
    Cook : ['Cook Meat ', 'Cook Soup', 'Cook Pie', 'Cook Potatoes', 'Cook Bread',],
  }

}

export default Structs;
