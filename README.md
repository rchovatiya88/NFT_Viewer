# NFT_Viewer
Bot to explore NFT Art on various Marketplaces

## How to Run 

**Pre-requiste** 
- Download `node.js` 
- `git clone` this repo or Download this repo
- Run the command `npm install` in the terminal
- Run  the command `npx cypress open` 
- When the Cypress open
- Click on the `allNFTS.spec.js` 

////  cy.visit("https://www.hicetnunc.xyz/");
            cy.scrollTo('bottom', { duration: 8000 });
            var i;
            for (i = 0; i < 50; i++) {
                cy.wait(1000)

                cy.scrollTo('bottom', { duration: 8000 });


                // If the New text/element is appeared then Compare it with first element 
                // and return/exit for loop.

            }
            return false;