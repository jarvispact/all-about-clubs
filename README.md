# all-about-clubs
a list and detail view for football clubs

## run locally in dev mode

- `npm i`
- `npm run dev`

## build production bundle and serve it

- `npm run build`
- `npm run serve`

## the following things are handled by the app:

- `src/domain/clubs/repository/get-club-list.ts` Empty List.
- `src/domain/clubs/repository/get-club-details.ts` Loading and Error. Not the best Design, but you get the idea ;) a 404 can be triggered by changing the url.

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

## time

initial commit: Sun Feb 7 09:35:58 2021 +0100
last commit: Sun Feb 7 19:01:45 2021 +0100
pause: 90 min
total: ~ 8 hours