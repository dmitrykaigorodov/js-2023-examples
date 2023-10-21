// pseudo DB code

const DB = {
  update() {

  }
}

// 

const emailService = {
  send(to, subj, body) {
    // real requests
  }
}

///
const testEmailService = {
  send(to, subj, body) {
    assertE
    if (to != 'dima.kaigorodov+test@gmail.com') {
      throw new Error('Invalid to')
    }
    if (subj != 'Article updated') {
      throw
    }
    if (!body || body.length < 50) {
      throw
    }
  }
}


/// server.js 
/// NOT INVERSION OF CONTROL
// import DB from './DB'

function createServer(DB, emailService) {
  const server = {
    saveArticle({ articleTitle }) {
      DB.update('article').where('id=', articleId).set('articleTitle', articleTitle)
      emailService.send(author, 'Article updated', 'Congrats...')
    }
  }
  return server
}

/// Dependency injects 

const server = {
  @('TYPE', DB) DB,
  @('TYPE', emailService) emailService,
    saveArticle({ articleTitle }) {
  this.DB.update('article').where('id=', articleId).set('articleTitle', articleTitle)
  this.emailService.send(author, 'Article updated', 'Congrats...')
}
}

framework.create(server)


/// Controller

import DB from './DB'

/// Test

const DB_with_author_only = {
  update(table) {
    if (table != 'article') {
      throw
    }
    return {
      where()
    }
  }
}

const testUpdatingArticle = () => {
  const server = createServer(DB_with_author_only, testEmailService)

}
testUpdatingArticle()

///
const frontend = {
  token: 123,
  async api(url, json) {
    fetch(url, {
      method: "POST",
      headers: {
        token
      },
      body: JSON.stringify(json)
    })
    // then
    // errors
    // if ok return result from server
  },
  saveArticle() {
    this.api('saveArticle', {
      articleId: currentArticleId,
      articleTitle: '123'
    })
  }
}