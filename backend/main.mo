import List "mo:core/List";
import Text "mo:core/Text";
import Int "mo:core/Int";
import Time "mo:core/Time";
import Array "mo:core/Array";
import Order "mo:core/Order";
import MixinStorage "blob-storage/Mixin";

actor {
  include MixinStorage();

  type ContactMessage = {
    id : Nat;
    name : Text;
    company : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Int;
  };

  module ContactMessage {
    public func compareByTimestampAsc(a : ContactMessage, b : ContactMessage) : Order.Order {
      Int.compare(a.timestamp, b.timestamp);
    };

    public func compareByTimestampDesc(a : ContactMessage, b : ContactMessage) : Order.Order {
      Int.compare(b.timestamp, a.timestamp);
    };
  };

  let contactList = List.empty<ContactMessage>();
  var nextId = 0;

  public shared ({ caller }) func submitContact(name : Text, company : Text, email : Text, phone : Text, message : Text) : async Nat {
    let contact : ContactMessage = {
      id = nextId;
      name;
      company;
      email;
      phone;
      message;
      timestamp = Time.now();
    };

    contactList.add(contact);
    nextId += 1;
    contact.id;
  };

  public query ({ caller }) func getContacts() : async [ContactMessage] {
    contactList.toArray();
  };

  public query ({ caller }) func getContactsSorted(orderBy : Text) : async [ContactMessage] {
    let contactsArray = contactList.toArray();
    switch (orderBy) {
      case ("asc") { contactsArray.sort(ContactMessage.compareByTimestampAsc) };
      case ("desc") { contactsArray.sort(ContactMessage.compareByTimestampDesc) };
      case (_) { contactsArray };
    };
  };
};
