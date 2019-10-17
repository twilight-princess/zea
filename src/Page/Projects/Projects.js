import React from 'react';
import './Projects.css'
import axios from 'axios'

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = { repos: [{ id: 0, name: '', url: '', language: '' }] }
    this.repoList = this.repoList.bind(this)
  }

  repoList = () => {
    axios.get("https://api.github.com/users/twilight-princess/repos")
      .then(response => {
        let repos = []
        if (response) {
          response.data.map((repo, i) => {
            if(repo.fork === false && repo.name !== "portfolio") {
              repos.push({
                id: i,
                name: repo.name,
                description: repo.description,
                url: repo.html_url,
                language: repo.language,
              })
            }
            return this.setState({ repos: repos })
          })
        }
      })
  }

  componentDidMount() {
    this.repoList();
  }

  componentWillUnmount() {
    clearInterval(this.repoList)
  }

  render() {
    let projectList;
    if (this.state.repos) {
      projectList = this.state.repos.map(r => {
        return (
          <div key={r.id} >
            <div>{r.name}</div>
            <div>{r.description}</div>
            <div>Language: {r.language}</div>
            <a href={r.url} rel="noopener noreferrer" target="_blank">See code in Github</a>
            <br/>
            <br/>
          </div>
        )
      })
    }


    return (
      <div className="Projects">
        <div id="projectList">
        {projectList}
        </div>
      </div>
    )
  }

};

export default Projects;