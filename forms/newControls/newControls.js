/*
1. Checkbox
- Change the header to item
- Change list to Apple, Banana, Orange

2. Button
- Change value to: submit
- Change apppearance: primary 

3. Label
- Change Color background : transparency
- Change value to: None

4. Image
- hidden = True
- change image to a fruit basket 
*/



Checkbox.onchange=function(){
  NSB.MsgBox("Value is "  +  Checkbox.value);
};


Button1.onclick=function(){
  Image1.hidden = True
  Label1.value = "Thank you for choosing item"
};

