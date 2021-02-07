# all-about-clubs
a list and detail view for football clubs

## run locally in dev mode

- `npm i`
- `npm run dev`

## build production bundle and serve it

- `npm run build`
- `npm run serve`

## the following things are handled by the app:

- `src/pages/club-list.tsx` empty list case is handled within here, uncomment and see it in action
- `src/pages/club-details.tsx` a 404 is handled here, simply type a invalid uuid in the url bar to see it in action
- `src/domain/clubs/use-club-details.ts` long loading variant and error variant is handled within here, uncomment and see it in action

## routing
routing is implemented as well. you can use direct links to navigate to a club detail page. but its using the uuid rather than the array index. we should not use incrementing ids (sequences) to prevent attacks. of course it has not too much relevance in this demo app ;) 

## infos
I tried to implement it with material-ui but i never used it before and i had a hard time getting the results i wanted. Normally im used to styled-system and theme-ui styling solutions where all the css is abstracted away with the typical Box Syntax:

```tsx
const Comp = ({children}) => {
    return (
        <Box as="ul" p={['s', 'm', 'l']}>
            {children}
        </Box>
    );
};
```

I wanted to keep things simple and quick, so i decided to use styled-components, just to get a basic theming and styling solution up and running. i hope this is ok 😕 🙃