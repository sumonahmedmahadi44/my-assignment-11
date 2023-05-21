import React from 'react';

const ExtraSection = () => {
    return (
        <div className='p-10 hover:p-32 duration-700'>
            <h1 className='mb-4 text-center font-extrabold text-4xl p-3 text-gray-500 border border-slate-900 border-spacing-2 bg-emerald-200 rounded-2xl'>Chat Section To Add a Toy !!!</h1>
            <div className="chat chat-start">
  <div className="chat-bubble chat-bubble-primary">What kind of toy u will Add?</div>
</div>
<div className="chat chat-start">
  <div className="chat-bubble chat-bubble-secondary">If U want to add plz login first!!!</div>
</div>
<div className="chat chat-start">
  <div className="chat-bubble chat-bubble-accent">Without log in U cannot add a Toys which U have!!!</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-info">Yes I want to add My Toys!!!</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-success">Ok! I am login in....</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-warning">How Can I add my Toys??/</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-error">Please give me some information.</div>
</div>
<div className="chat chat-start">
  <div className="chat-bubble chat-bubble-secondary">Firstly go to add toy link</div>
</div>
<div className="chat chat-start">
  <div className="chat-bubble chat-bubble-accent">TThen u input Ur all Toy details And submit it!</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-warning">Ok !! Let me Try First!!!</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-error">Oh!! Thnks finally i add my Toy!!!</div>
</div>
        </div>
    );
};

export default ExtraSection;