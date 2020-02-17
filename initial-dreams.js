
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


    const name = "brolis77";
    const description = 'description about brolis 77';

    


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
