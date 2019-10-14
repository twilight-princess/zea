import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './Projects.css'
import { getRepos } from '../../redux'

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = { repos: [{ name: '', url: '', language: '' }] }
    this.buildRepos = this.buildRepos.bind(this)
  }

  buildRepos = () => {
    this.setState({repos: getRepos()})
    console.log(this.state)
  }

  render() {

    const repoList = () => {
      this.buildRepos();
      this.state.repos.map((repo, i) => {
        console.log(repo.name)
        return <div key={i}>{repo.name}</div>
      })
    }

    return (
      <div className="Projects">
        {repoList}
      </div>
    )
  }

};


const mapDispatchToProps = dispatch => {
  return {
      getRepos: () => {
          dispatch(getRepos)
      } 
  }
}

export default withRouter(connect(prevState => prevState, mapDispatchToProps)(Projects))