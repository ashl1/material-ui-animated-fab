# material-ui-animated-fab
Animated FloatingActionButton for material-ui ^0.18.1

This package provide appearing and disappearing animation of Material-UI FloatingActionButton with onDidLeave() event.

```
import AnimatedFAB from 'material-ui-animated-fab'
import ContentAdd from 'material-ui/svg-icons/content/add'

<AnimatedFAB
    key={1}
    style={style}
    onClick={handleFabClicked}
    onDidLeave={handleDidLeave}
>
    <ContentAdd />
</AnimatedFAB>
```

More extended versin of example located in **example.js** file in Github repo.

# License
MIT license

© Alexey Shildyakov
