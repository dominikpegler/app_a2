import React from 'react';
import { Button } from 'react-native';


// function FavButton(props) {

class FavButton extends React.Component {

    constructor(props){
        super(props);
        this.state = { isFav:false };
      };

    componentDidMount() {
        if (this.props.favs_id.includes(this.props.idArtist)) {
            this.setState({isFav:true});
        };
        
    }

    render(){

    if (this.state.isFav) {
        return <Button
            title="Remove from favs"
            onPress={() => {
                this.setState({isFav:false});
                this.props.onArtistRemoved(this.props.idArtist, this.props.favs_id, this.props.favs_name)
                this.props.onFavsUpdate(this.props.favs_id, this.props.favs_name)}
            }
        />;
    } else {
        return <Button
            title="Add to favs"
            onPress={() => {
                this.setState({isFav:true});
                this.props.onArtistAdded(this.props.idArtist, this.props.strArtist, this.props.favs_id, this.props.favs_name)
                this.props.onFavsUpdate(this.props.favs_id, this.props.favs_name)}
            }
        />;
    }
}
}

export default FavButton;