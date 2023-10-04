import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug";
actor Token{
  var owner : Principal=Principal.fromText("pz2dj-so7l3-wr34w-hhrpm-tfhlt-bff4j-dqifn-iu5hl-eldhz-hh7la-fae");
  var totalSupply:Nat=20000;
  var symbol:Text="DAKS";
  var balances =  HashMap.HashMap<Principal,Nat>(1,Principal.equal,Principal.hash); //Hashmap is like a dictionary
  balances.put(owner,totalSupply);
  public query func balanceOf(who:Principal) : async Nat{
  let balance:Nat=switch(balances.get(who)){
    case null 0;
    case (?int) int;
  };
  return balance;
  };
  public query func getSymbol() : async Text{
    return symbol;
  };
  public shared(msg) func payOut():async Text{
  Debug.print(debug_show(msg.caller));
    if(balances.get(msg.caller)==null){
          balances.put(msg.caller,20);
          return "Success";
    }
    else {return "Already paid"}
    };
};