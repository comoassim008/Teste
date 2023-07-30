
const { SlashCommandBuilder } = require('@discordjs/builders');
const { PermissionsBitField , EmbedBuilder , ButtonStyle, ActionRowBuilder, ButtonBuilder, StringSelectMenuBuilder, ModalBuilder, PermissionFlagsBits  } = require('discord.js');
const wio = require("wio.db");
const config = require('../../config.json')
const services = new wio.JsonDatabase({ databasePath:"database/services.json" });
const free = new wio.JsonDatabase({ databasePath:"database/free.json" });
const booster = new wio.JsonDatabase({ databasePath:"database/booster.json" });


module.exports =  {
	data: new SlashCommandBuilder()
		.setName('gerador')     
        .setDescription('Envia o painel de gerar contas') 
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addStringOption(option => option.setName('tipo').setDescription('Tipo do painel').setRequired(true).addChoices(
            { name: 'Free', value: 'free' },
            { name: 'Booster', value: 'booster' },
            { name: 'Premium', value: 'premium' },
        )),

            async execute(interaction, client) {
                const choices = interaction.options.get('tipo').value;

                if (choices === 'premium') {     

               const serviços = services.all()

               if(serviços.length < 1){
                return interaction.reply({content: `❌ Nenhum serviço foi encontrado em meu sistema!`, ephemeral: true});
               }


               interaction.reply({content: `Enviando painel...`, ephemeral: true});
              
             
              const painel = new EmbedBuilder()
              .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL()})
              .setColor(config.embed_color)
              .setDescription(`<:unknown1:1068195811378352139> | Olá, Seja bem-vindo(a) ao nosso sistema de gerador Gerador Premium. Para Ultilizar nossos serviços selecione uma das opções do menu Abaixo!

              <:amarelo_ouhboy:1125868234718072992> | Sinta-se à vontade para gerar quantas vezes desejar.
              
              <a:Anuncio:1125867578322071592> | Os Serviços gerados são uncheckeds ou antigos!`)
              const rowMenu = new ActionRowBuilder()
              .addComponents(
                  new StringSelectMenuBuilder()
                      .setCustomId('painel_gerador')
                      .setPlaceholder('Selecione Um Serviço')
                      .addOptions(
                        serviços.map(serv => ( 
                              {
                                  label: serv.data.nome,
                                  value: serv.data.id,
                                  emoji: serv.data.emoji,
                                  description: `${serv.data.estoque.length} Em estoque`,
                              }
                        ))
                              ),
              );

              interaction.channel.send({embeds: [painel], components: [rowMenu]})
                            }


                            if (choices === 'free') {     

                                const serviços = free.all()
                 
                                if(serviços.length < 1){
                                 return interaction.reply({content: `❌ Nenhum serviço foi encontrado em meu sistema!`, ephemeral: true});
                                }
                 
                 
                                interaction.reply({content: `Enviando painel...`, ephemeral: true});
                               
                              
                               const painel = new EmbedBuilder()
                               .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL()})
                               .setColor(config.embed_color)
                               .setDescription(`<:unknown1:1068195811378352139> | Olá, Seja bem-vindo(a) ao nosso sistema de gerador Gerador Free. Para Ultilizar nossos serviços selecione uma das opções do menu Abaixo!

                               <a:yingpratiado:1110062861016903720> | Sinta-se à vontade para gerar quantas vezes desejar.
                               
                               <a:Anuncio:1125867578322071592> | Os Serviços gerados são uncheckeds ou antigos!`)
                               const rowMenu = new ActionRowBuilder()
                               .addComponents(
                                   new StringSelectMenuBuilder()
                                       .setCustomId('painel_free')
                                       .setPlaceholder('Selecione Um Serviço')
                                       .addOptions(
                                         serviços.map(serv => ( 
                                               {
                                                   label: serv.data.nome,
                                                   value: serv.data.id,
                                                   emoji: serv.data.emoji,
                                                   description: `${serv.data.estoque.length} Em estoque`,
                                               }
                                         ))
                                               ),
                               );
                 
                               interaction.channel.send({embeds: [painel], components: [rowMenu]})
                                             }

                                             if (choices === 'booster') {     

                                                const serviços = booster.all()
                                 
                                                if(serviços.length < 1){
                                                 return interaction.reply({content: `❌ Nenhum serviço foi encontrado em meu sistema!`, ephemeral: true});
                                                }
                                 
                                 
                                                interaction.reply({content: `Enviando painel...`, ephemeral: true});
                                               
                                              
                                               const painel = new EmbedBuilder()
                                               .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL()})
                                               .setColor(config.embed_color)
                                               .setDescription(`<:unknown1:1068195811378352139> | Olá, Seja bem-vindo(a) ao nosso sistema de gerador Gerador Booster. Para Ultilizar nossos serviços selecione uma das opções do menu Abaixo!

                                               <a:boost:1128336235535024248> | Sinta-se à vontade para gerar quantas vezes desejar.
                                               
                                               <a:Anuncio:1125867578322071592> | Os Serviços gerados são uncheckeds ou antigos!`)
                                               const rowMenu = new ActionRowBuilder()
                                               .addComponents(
                                                   new StringSelectMenuBuilder()
                                                       .setCustomId('painel_booster')
                                                       .setPlaceholder('Selecione Um Serviço')
                                                       .addOptions(
                                                         serviços.map(serv => ( 
                                                               {
                                                                   label: serv.data.nome,
                                                                   value: serv.data.id,
                                                                   emoji: serv.data.emoji,
                                                                   description: `${serv.data.estoque.length} Em estoque`,
                                                               }
                                                         ))
                                                               ),
                                               );
                                 
                                               interaction.channel.send({embeds: [painel], components: [rowMenu]})
                                                             }                        
                        
                       
          }
      }
    