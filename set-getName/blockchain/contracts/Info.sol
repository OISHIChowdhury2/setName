// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Info {
  struct Infor {
      string name;
      string addres;
      uint256 phone;
  }
  Infor info;
   function setName(string memory _name) public {   
          info.name=_name;
         }
          function setAddres(string memory _addres) public {   
          info.addres=_addres;
         }
          function setPhone(uint256 _phone) public {   
          info.phone=_phone;
         }
    function getName()public view returns(string memory){
      return info.name; 
         }
    function getAddres()public view returns(string memory){
      return info.addres; 
         }
    function getphone()public view returns(uint256){
      return info.phone;
         }
}
