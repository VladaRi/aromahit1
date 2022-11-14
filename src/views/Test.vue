<template>
  <div></div>
</template>

<script>
  export default {
    name: 'Test',
    data () {
      return {
        family: [
          { member: 'mother', id: 111, coffee: 'Latte'},
          { member: 'father', id: 222, coffee: 'Espresso'},
          { member: 'son', id: 333, coffee: 'Cappuccino'},
        ],
        familyMember: {}
      }
    },
    mounted () {
      this.familyMemberUpdate(111)
    },

    methods: {
      familyMemberUpdate(id) {
        return this.getCoffee(id).then(memberUpdated => { console.log(memberUpdated) })
      },

      getFamilyMember(id) {
        this.familyMember = this.family.find(item => item.id === id)
      },

      getCoffee (id) {
        class FavouriteCoffeeError extends Error {
          constructor(message) {
            super(message);
            this.name = "FavouriteCoffeeError";
          }
        }

        class FamilyMemberError extends Error {
          constructor(message) {
            super(message);
            this.name = "FamilyMemberError";
          }
        }

        let coffeePromise = fetch('https://api.sampleapis.com/coffee/hot');
        return coffeePromise
          .then(data => data.json())
          .then(list => {
            this.getFamilyMember(id)
            if(this.familyMember === undefined) {
              throw new FamilyMemberError('familyMember doesn\'t exist')
            }
            let favouriteCoffee = list.find(res => res.title === this.familyMember.coffee)
            if (favouriteCoffee === undefined) {
              throw new FavouriteCoffeeError('favouriteCoffee doesn\'t exist')
            }
            return {
              ...this.familyMember,
              coffee: favouriteCoffee
            }
          })
          .catch((err) => {
            if (err instanceof FavouriteCoffeeError) {
              return 'such coffee doesn\'t exist'
            }
            if (err instanceof FamilyMemberError) {
              return 'such family member doesn\'t exist :('
            }
            console.log(err)
          })
      }
    }

    // methods: {
    //   getFamilyMember(id) {
    //     this.familyMember = this.family.find(item => item.id === id)
    //   },
    //
    //   getCoffee (id) {
    //     let coffeePromise = fetch('https://api.sampleapis.com/coffee/hot');
    //       return coffeePromise
    //         .then(data => data.json())
    //         .then(list => {
    //           this.getFamilyMember(id)
    //           let favouriteCoffee = list.find(res => res.title === this.familyMember.coffee)
    //           return {
    //             ...this.familyMember,
    //             coffee: favouriteCoffee
    //           }
    //         })
    //         .then(newMember => { console.log(newMember) })
    //   }
    // }
  }
</script>

<style scoped>

</style>