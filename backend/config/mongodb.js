const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/knowledge_stats', { useNewUrlParser: true, useUnifiedTopology: true  })
   .catch(e => {
      const msg = 'ERRO! Não foi possível se conectar ao MongoDB!'
      console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
      // Deixa com o Backgroud Red, Mensagem, Reseta a configuração de BG
   })