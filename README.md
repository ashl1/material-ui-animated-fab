# material-ui-animated-fab
Animated FloatingActionButton for material-ui ^0.18.1

This package provide appearing and disappearing animation of Material-UI FloatingActionButton with onDidLeave() event.

```
import ReactTransitionGroup from 'react-addons-transition-group'
import AnimatedFAB from 'material-ui-animated-fab'
import ContentAdd from 'material-ui/svg-icons/content/add'

let fab = ''
if (smth) {
    fab = (
        <AnimatedFAB
            key={1}
            style={style}
            onClick={handleFabClicked}
            onDidLeave={handleDidLeave}
        >
            <ContentAdd />
        </AnimatedFAB>
    )
} else if (smth2) {
    fab = (
        <AnimatedFAB
            key={2}
            style={style2}
            onClick={handleFabClicked}
            onDidLeave={handleDidLeave}
        >
            <ContentAdd />
        </AnimatedFAB>
    )
}

<ReactTransitionGroup>
    {fab}
</ReactTransitionGroup>
```

More extended versin of example located in **example.js** file in Github repo.

# License
MIT license

© Alexey Shildyakov
