# P7-front-end-search-engine
Code repo for project 7 of the Front-end Developer path: a search engine for recipes.

Languages used: HTML/CSS/JS.

Description:

![Untitled Diagram(1)](https://user-images.githubusercontent.com/71354759/167274778-bcf8bf26-a335-4c19-9e89-388af534f9ba.jpg)



Develop a searching algorithm, with filtering Tags.
Tag values are defined by the equivalent array (ingredient,appliance,ustensil) found in the main Recipe Array(data folder).
After the selection of an Element, the tags list is limited by the available options.
4 input element Tags, with whom value we filter our selected elements array. Results are diplayed on the board.
If nothing's found, alert that nothing is found and nothing is displayed on the board.

Creation of 2 different algorithms in order to find the most perfoming one by performance benchmarking.
Jsbench was used as a performance benchmarking tool.

First algorithm uses the :for: looping, while the second algorithm uses the :forEach(): array method as an optimisation.

note: the usage of break is not allowed in forEach() method, as a result, a :for: loop is applied as well in certain parts of the algo2 where a break was necessary.

![JsBench_screenshot](https://user-images.githubusercontent.com/71354759/166900225-0e7fb35a-4a39-4f6c-a495-d7b2c3c33766.png)

![127 0 0 1_5501_algo2_ (1)](https://user-images.githubusercontent.com/71354759/167274996-652274f8-e315-4315-8646-d08811ad1627.png)
![Screenshot from 2022-05-10 12-32-34](https://user-images.githubusercontent.com/71354759/167609667-9e349f4f-abcd-4c43-a891-95358ce1a38e.png)
