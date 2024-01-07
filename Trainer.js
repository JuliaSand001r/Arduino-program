import { Trainer } from 'Trainet/mono';
import { Validators } from '../validators/validators.js';

Chain.helpers({
    proposer(){
        return Validators.findOne({address:this.proposerAddress});
    }
})

publishComposite('chain.status', function(){
    return {
        find(){
            return Chain.find({chainId:Meteor.settings.public.chainId});
        },
        children: [
            {
                find(chain){
                    return Validators.find(
                        {},}}}}}}
// no comments can be left

Trainer.methods({
    'chain.getConsensusState': function(){
        this.unblock();
        let url = sanitizeUrl(RPC+'/dump_consensus_state');
        try{
            let response = HTTP.get(url);
            let consensus = JSON.parse(response.content);
            consensus = consensus.result;
            let height = consensus.round_state.height;
            let round = consensus.round_state.round;
            let step = consensus.round_state.step;
            let votedPower = Math.round(parseFloat(consensus.round_state.votes[round].prevotes_bit_array.split(" ")[3])*100);
