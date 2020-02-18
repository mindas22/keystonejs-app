
module.exports = async keystone => {

  //Count existing users
  // const {
  //   data: {
  //     _allUsersMeta: { count },
  //   },
  // } = await keystone.executeQuery(
  //   `query {
  //     _allUsersMeta {
  //       count
  //     }
  //   }`
  // );

    const oneDream = [
      {name: "brolis 88", description: "all about 88"},
      {name: "sese 88", description: "all about sese 88"}
    ]


    const name = oneDream[0].name
    const description = oneDream[0].description

    //this method good just for insterting new items
    await keystone.createItems({
      Dream: [{ name: 'Ticiana2', description: 'nu' }, { name: 'Lauren', description: 'ijuu' }],
    });

    
  //this is graphql mutation query
     await keystone.executeQuery(
      `mutation initialDream($name: String, $description: String) {
            createDream(data: {name: $name, description: $description}) {
              id
            }
          }`,
      {
        variables: {
          name,
          description,
        },
      }
    );

    console.log(`

Dream was created:
  name: ${name}
  description: ${description}
all good here
`);

};
