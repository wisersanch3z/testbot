module.exports = async (client) => {
  console.log(`Bot: ${client.user.username} online`);


  client.user.setStatus("dnd");
  client.user.setActivity({	
		name: `En mantenimiento`,
		type: 'PLAYING'

})
};

