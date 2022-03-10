(() => {
    this.name = 'Nome no contexto de cria��o';

    const getNameArrowfn = () => this.name;

    function getName(){
        return this.name;
    }

    const user = {
        name: 'Nome no objeto de execu��o',
        getNameArrowfn,
        getName
    }

    console.log(user.getNameArrowfn());
    console.log(user.getName());
})();