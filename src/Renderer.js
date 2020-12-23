const user = require('./templates/user-template.handlebars');
const friends = require('./templates/user-friends-template.handlebars');
const quote = require('./templates/quote-template.handlebars');
const pokemon = require('./templates/pokemon-template.handlebars');
const meat = require('./templates/meat-template.handlebars');

class Renderer {
    renderUsers(users) {
        // let source = user.html()
        let template = user
        let newHTML = template(users.results[0]);
        $(".user-container").empty().append(newHTML);
    }

    renderFriends(users) {
        // let sourceFriends = friends.html()
        let templateFriends = friends
        let friendsHTML = templateFriends({friends: users.results.splice(1)})
        $(".friends-container").empty().append(friendsHTML)
    }

    renderQuote(quoteInfo) {
        // let sourceQuote = quote.html()
        let templateQuote = quote
        let quoteHTML = templateQuote(quoteInfo)
        $(".quote-container").empty().append(quoteHTML)
    }

    renderPokemon(pokemonInfo) {
        // let sourcePokemon = pokemon.html()
        let templatePokemon = pokemon
        let pokemonHTML = templatePokemon(pokemonInfo)
        $(".pokemon-container").empty().append(pokemonHTML)
    }

    renderMeat(meatText) {
        // let sourceMeat = meat.html()
        let templateMeat = meat
        let meatHTML = templateMeat({text: meatText})
        $(".meat-container").empty().append(meatHTML)
    }

    render(data){
        this.renderFriends(data.users)
        this.renderUsers(data.users)
        this.renderQuote(data.quote)
        this.renderPokemon(data.pokemon)
        this.renderMeat(data.meat)
    }
}
export default Renderer