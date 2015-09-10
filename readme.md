#Query Sequencer

Basic abillity to create multi-step CSS tranisitions by applying sequential classnames to a targeted element.

It will not use `javascript` to add styles to the element, but append a class list in the appropriate order over time, leaving you to use `CSS` build your animation sequence.

###quick usage example


	qs('.target').on('click', [.2, .5])

Based upon the above, the following classes are added:

| Time | Class Name | 
| ------------ | ------------- | 
| 0    | transition--step-0 |
| 0.2s | transition--step-1 |
| 0.5s | transition--step-2 |

Sequentially as soon as the `click` on the element has been applied.

###ToDo
Loads.
 
* Reverses
* Basic addClass methods etc
* toggles
* state
* injections